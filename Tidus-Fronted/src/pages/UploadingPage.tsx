import React, { useEffect, useState } from "react"
import {ResumeUpload} from "../components/Uploading/ResumeUpload"
import{JobDescriptionUpload} from "../components/Uploading/jobDescriptionUpload"
import{AIAnalysis}from "../components/Uploading/AIAnalysis"
import {Steps ,Button,Form, Descriptions} from "antd"

const {Step}=Steps
const UploadingPage:React.FC=()=>{
    //当前step
    const [current,setCurrent]=useState(0);

    //每步step所需要的数据
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState("");
    const [analysisResult, setAnalysisResult] = useState<string | null>(null);

     useEffect(() => {
         console.log(resumeFile)
         console.log(jobDescription)
     }, [current])


    const [jobDescriptionForm]=Form.useForm()
    const renderStep=()=>{
        switch(current){
            case 0:
                return(
                     <ResumeUpload onUploadSuccess={(file)=>{
                        setResumeFile(file);
                        setCurrent(current+1)
                     }}/>
                );
            case 1:
                return(
                    <JobDescriptionUpload
                        form={jobDescriptionForm}
                        onFinishDescription={(desc)=>{
                            console.log('岗位描述',desc)
                            setJobDescription(desc)
                            setCurrent(current+1)
                        }}   
                    />
                );
            case 2:
                return(
                    <div className="flex flex-col justify-center items-center">
                    <div className="py-8">
                        <AIAnalysis />
                    </div>
                    
                        {/* 这里还要分加载中或者加载后的文字 */}
                    <div>
                        正在为你分析简历
                    </div>
                    
                    </div>
                    
                );
            default:
                return null;
        }
    }
    return (
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-8 space-y-10">
            <div >
                <h1 className="text-3xl font-bold text-center">AI简历诊断</h1>
            </div>

            <div className="max-w-2xl mx-auto">
                <h2 className="text-lg text-gray-600">您可以在此页面上传您的简历（支持 PDF、Word、TXT、Markdown 等格式），并选择您感兴趣的岗位需求。系统会基于 AI 技术，智能分析您的简历内容与岗位匹配度，帮助您更好地了解自己的优势和不足，提高求职效率。</h2>
            </div>

            <div className="w-full max-w-2xl mx-auto space-y-6">
                <Steps current={current}>
                    <Step title="上传简历"></Step>
                    <Step title="上传岗位"></Step>
                    <Step title="AI分析"></Step>
                </Steps>
            </div>

            <div className="w-full h-full flex flex-col justify-center ">
                {renderStep()}
            </div>

            <div className="w-full flex justify-center space-x-4">
                {current > 0 && (
                    <Button
                        size='large'
                        onClick={() => setCurrent(current - 1)}
                        block
                    >
                        上一步
                    </Button>
                )}
                {current === 1 && (
                    <Button
                        block
                        type="primary"
                        size='large'
                        onClick={() => { jobDescriptionForm.submit() }}
                    >提交</Button>
                )}
                {
                //这个button要等后端分析完之后才出现
                current === 2 && (
                    <Button
                        size='large'
                        block
                        type="primary"
                    >获取分析结果</Button>
                )}
            </div>
        </div>
    )
}

export default UploadingPage