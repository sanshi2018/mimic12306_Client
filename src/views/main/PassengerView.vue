<template>
    <p>
        <a-space>
            <a-button type="primary" @click="handleQuery()">刷新</a-button>
            <a-button type="primary" @click="onAdd">新增</a-button>
        </a-space>
    </p>
    <a-table :dataSource="passengers" :columns="columns" :pagination="pagination" 
        @change="handleTableChange"
        :loading="loading">

        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex == 'operation'">
                <a-space>
                    <a-popconfirm title="删除后不可恢复！确认删除！" @confirm="onDelete(record)" ok-text="确认" cancel-text="取消" >
                        <a style="color: red;">删除</a>    
                    </a-popconfirm>
                    <a @click="onEdit(record)">编辑</a>
                </a-space>
            </template>
            <template v-else-if="column.dataIndex == 'type'">
                <span v-for="item in PASSENGER_TYPE_ARRAY" :key="item.key">
                    <span v-if="item.key === record.type">{{item.value}}</span>
                </span>
            </template>
        </template>
    </a-table>

    <a-modal title="乘车人" v-model:open="visible" @ok="handleOk" @cancel="handleCancel" ok-text="确认" cancel-text="取消">
        <a-form :model="passenger" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-form-item label="姓名">
                <a-input v-model:value="passenger.name" />
            </a-form-item>

            <a-form-item label="身份证">
                <a-input v-model:value="passenger.idCard" />
            </a-form-item>

            <a-form-item label="类型">
                <a-select v-model:value="passenger.type">
                    <!-- 使用for渲染a-select-option  -->
                    <a-select-option v-for="item in PASSENGER_TYPE_ARRAY" :key="item.value" :value="item.value">{{item.value}}</a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue';
import { notification } from "ant-design-vue"
import axios from 'axios';

export default defineComponent({
    name: "PassengerView",
    // 页面生命周期，页面初始化前执行setup
    setup() {
        const PASSENGER_TYPE_ARRAY = window.PASSENGER_TYPE_ARRAY;
        const visible = ref();
        //----新增乘车人数据结构
        const passenger = ref({
            id: undefined,
            memberId: undefined,
            name: undefined,
            idCard: undefined,
            type: undefined,
            createTime: undefined,
            updateTime: undefined,
        })

        //----表格数据源
        const passengers = ref([])
        //----表格定义
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '身份证',
            dataIndex: 'idCard',
            key: 'idCard',
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '操作',
            dataIndex: 'operation',
        }];
        //---分页
        const pagination = ref({
            total: 0,
            current: 1,
            pageSize: 2
        })
        //---loading
        const loading = ref(false)

        //---方法-----------

        const showModal = () => {
            passenger.value = {}
            visible.value = true;
        };

        const hindeModal = () => {
            visible.value = false;
        };

        const onEdit = (record) => {
            showModal();
            // passenger.value = record
            // 深拷贝record对象
            // passenger.value = JSON.parse(JSON.stringify(record))
            passenger.value = window.Tool.copy(record);
            
        };
        const onDelete = (record) => {
            axios.delete("/member/passenger/delete/"+record.id)
            .then((response) => {
                let data = response.data
                if (data.success) {
                    notification.success({ description: "删除成功！" })
                    handleQuery({
                        page: pagination.value.current,
                        size: pagination.value.pageSize
                    })
                } else {
                    notification.error({ description: data.message })
                }
            })
        };

        const onAdd = () => {
            showModal();
        };

        const handleOk = () => {
            axios.post("/member/passenger/save", passenger.value).then((response) => {
                let data = response.data
                if (data.success) {
                    notification.success({ description: "保存成功！" })
                    hindeModal();
                    // onModalClose();
                    handleQuery({
                        page: pagination.value.current,
                        size: pagination.value.pageSize
                    })
                } else {
                    notification.error({ description: data.message })
                }
            })
        };

        const handleCancel = () => {
            hindeModal();
            // onModalClose();
        };

        // const onModalClose = () => {
        //     passenger.id = undefined
        //     passenger.memberId = undefined
        //     passenger.name = undefined
        //     passenger.idCard = undefined
        //     passenger.type = undefined
        //     passenger.createTime = undefined
        //     passenger.updateTime = undefined
        // }

        const handleQuery = (param) => {
            loading.value = true
            if (!param) {
                param = {
                    page: 1,
                    size: pagination.value.pageSize
                }
            }

            axios.get("/member/passenger/query-list", {
                params: {
                    page: param.page,
                    size: param.size
                }
            }).then((response) => {
                let data = response.data
                if (data.success) {
                    passengers.value = data.content.list
                    pagination.value.total = data.content.total
                    pagination.value.current = param.page
                } else {
                    notification.error({ description: data.message })
                }
            }).finally(() => {
                loading.value = false
            })
        }

        // 选择下标发生变化时触发
        const handleTableChange = (pagination) => {
            handleQuery({ page: pagination.current, size: pagination.pageSize })
        }

        // 页面生命周期 :页面加载完毕后执行onMounted
        onMounted(() => {
            handleQuery({ page: pagination.value.current, size: pagination.value.pageSize })
        })
        return {
            PASSENGER_TYPE_ARRAY,
            visible,
            passenger,
            handleOk,
            onAdd,
            onDelete,
            onEdit,
            handleCancel,
            handleQuery,
            handleTableChange,
            passengers,
            columns,
            pagination,
            loading
        };
    },
});
</script>
<style></style>