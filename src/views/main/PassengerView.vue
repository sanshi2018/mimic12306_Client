<template>
    <p>
        <a-button type="primary" @click="showModal">新增</a-button>
    </p>
    <a-table :dataSource="passengers" :columns="columns" :pagination="pagination" />

    <a-modal title="新增乘车人" :visible="visible" @ok="handleOk" @cancel="handleCancel" ok-text="确认" cancel-text="取消">
        <a-form :model="passenger" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-form-item label="姓名">
                <a-input v-model:value="passenger.name" />
            </a-form-item>

            <a-form-item label="身份证">
                <a-input v-model:value="passenger.idCard" />
            </a-form-item>

            <a-form-item label="类型">
                <a-select v-model:value="passenger.type">
                    <a-select-option value="1">成人</a-select-option>
                    <a-select-option value="1">儿童</a-select-option>
                    <a-select-option value="1">学生</a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>
<script>
import { defineComponent, ref, reactive, onMounted} from 'vue';
import { notification } from "ant-design-vue"
import axios from 'axios';

export default defineComponent({
    name: "PassengerView",
    // 页面生命周期，页面初始化前执行setup
    setup() {
        const visible = ref();
        // ref vs reactive 对reactive数组使用 = 赋值，会让其失去响应式特性，不会触发视图更新，ref会触发视图更新
        // ref 变量使用 .value进行赋值
        //----新增乘车人数据结构
        const passenger = reactive({
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
        }];
        //---分页
        const pagination = reactive({
            total: 0,
            current: 1,
            pageSize: 2
        })

        const showModal = () => {
            visible.value = true;
        };

        const handleOk = () => {
            axios.post("/member/passenger/save", passenger).then((response) => {
                let data = response.data
                if (data.success) {
                    notification.success({ description: "保存成功！" })
                    visible.value = false;
                } else {
                    notification.error({ description: data.message })
                }
            })
        };

        const handleCancel = () => {
            visible.value = false;
        };

        const handleQuery = (param) => {
            axios.get("/member/passenger/query-list", {
                params : {
                    page: param.page,
                    size: param.size
                }
            }).then((response) => {
                let data = response.data
                if (data.success) {
                    passengers.value = data.content.list
                    pagination.total = data.content.total
                } else {
                    notification.error({ description: data.message })
                }
            })
        }

        // 页面生命周期 :页面加载完毕后执行onMounted
        onMounted(() => {
            handleQuery({page: 1, size: 10})
        })
        return {
            visible,
            passenger,
            showModal,
            handleOk,
            handleCancel,
            passengers,
            columns,
            pagination
        };
    },
});
</script>
<style></style>