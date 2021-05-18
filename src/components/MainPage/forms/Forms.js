import Form from 'aws-northstar/components/Form';
import Button from 'aws-northstar/components/Button';
import Checkbox from 'aws-northstar/components/Checkbox';
import FormField from 'aws-northstar/components/FormField'
import FormSection from 'aws-northstar/components/FormSection';
import Input from 'aws-northstar/components/Input';
import Select from 'aws-northstar/components/Select';
import { useCallback, useEffect, useState } from 'react';


const Forms = () => {

    const [InstanceType, SetInstanceType] = useState([]);

    const instance_detail = useCallback(async () => {
        let response = await fetch("https://u1lu76vc4b.execute-api.us-east-1.amazonaws.com/Dev/instance-details/instance-type")
        response = await response.json()
        SetInstanceType(response)
      }, [])

    useEffect(() => {
        instance_detail()
      },[instance_detail]);

    const temp_ins = InstanceType.map((ins,i)=>{
        return {
            value:i,
            label:ins.Instance_Type
        }
    })
  
    console.log(temp_ins)

    return (
        <Form
            header="Add Details"
            description="You can view source to see how components are put together"
            actions={
                <div>
                    <Button variant="link">Cancel</Button>
                    <Button variant="primary">Submit</Button>
                </div>
            }>
            <FormSection header=''>
                <FormField label="Number of Pods" hintText="Input constraint goes here. e.g. 1,000" controlId="formFieldId1">
                    <Input type="text" controlId="formFieldId1" />
                </FormField>
                
                {
                  InstanceType?<FormField label="Instance Type" hintText="Input constraint goes here. e.g. m4.large" controlId="formFieldId3">
                    <Select
                        placeholder="Choose an option"
                        controlId="formFieldId3" 
                        options={temp_ins}
                    >
                    </Select>
                  </FormField>:null
                }
                <FormField label="Region" hintText="Input constraint goes here. e.g. us-east-1" controlId="formFieldId3">
                    <Select
                placeholder="Choose an option"
                controlId="formFieldId3"
                    />
                </FormField>

                <FormField controlId="formFieldId5">
                    <Checkbox>Check me out</Checkbox>
                </FormField>
            </FormSection>
        </Form>
    )
}

export default Forms

