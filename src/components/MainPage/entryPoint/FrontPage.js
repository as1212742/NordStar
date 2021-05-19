import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import Box from 'aws-northstar/layouts/Box';
import React from 'react'
import Card from 'aws-northstar/components/Card';
import { useHistory } from "react-router-dom";

const FrontPage = () => {

    const history = useHistory();
    
    const routeChange = (pth) =>{ 
        console.log(pth)
        const path = pth; 
        history.push(path);
      }

    const DemoBox = ({title,subtitle,TextContent,bgcolor,path}) => {
        return <Box display="flex" width='100%' height='300px' bgcolor={bgcolor} alignItems="center" justifyContent="center" >
            <Card title={title} subtitle={subtitle} withHover onClick={() => routeChange(path)} >
            {TextContent}
        </Card>
        </Box>;
    }





    return (
        <ColumnLayout>
        <Column key="column1">
           <DemoBox title="Fargate" subtitle="Calculation for fargate" TextContent="Serverless Service" bgcolor='grey.100' path="Calc" />
        </Column>
        <Column key="column2">
            <DemoBox title="ecs" subtitle="Calculation for ecs" TextContent="ecs"  width="500px" height="40px" bgcolor='grey.200' path="secondpage"/>
        </Column>
       
    </ColumnLayout>
    )
}

export default FrontPage

