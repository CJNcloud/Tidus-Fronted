import React from "react";
import { Flex, Progress } from 'antd';

export const AIAnalysis: React.FC = () => {
    return (
        //percent与后端分析过程连接
        <Flex gap="small" wrap>
            <Progress type="circle" percent={75} />
        </Flex>
    )
}

export default AIAnalysis