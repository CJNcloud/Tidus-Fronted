import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

interface ResumeUploadProps {
  //上传成功后在UploadingPage执行的操作（下一步）
  onUploadSuccess?: (file: File) => void
}
export const ResumeUpload: React.FC<ResumeUploadProps> = ({
  onUploadSuccess
}) => {
  const props: UploadProps = {
    name: 'file',
    action: 'https://httpbin.org/post',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        onUploadSuccess?.(info.file.originFileObj as File)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };


  return (
    <Dragger {...props} className="w-full">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
      <p className="ant-upload-hint">
        支持PDF、MD、TXT、DOCX等格式文件
      </p>
    </Dragger>
  )
};

export default ResumeUpload;