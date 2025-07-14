import React from "react";
import {Input,Form} from "antd"
import type { FormInstance } from "antd";

const {TextArea}=Input;

interface JobDescriptionUploadProps{
    //抓取表单
    form:FormInstance;
    //在UploadingPage中提交
    onFinishDescription:(value:any)=>void
}
export const JobDescriptionUpload:React.FC<JobDescriptionUploadProps>=({
    form,
    onFinishDescription
})=>{
    const handleFinish=(value:any)=>{
        onFinishDescription(value.description)
    }
    return (
         <>
         <Form
            name="jobDescription"
            form={form}
            onFinish={handleFinish}
        >
            <Form.Item 
                name="description"
                rules={[{required:true,message: '请输入描述'}]}
            >
                <TextArea 
                    rows={6} 
                    placeholder="请粘贴职位描述信息..."
                />
            </Form.Item>
         </Form>
            
        </>
    )
}

export default JobDescriptionUpload