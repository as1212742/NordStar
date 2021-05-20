import Form from 'aws-northstar/components/Form';
import Button from 'aws-northstar/components/Button';
import Checkbox from 'aws-northstar/components/Checkbox';
import FormField from 'aws-northstar/components/FormField'
import FormSection from 'aws-northstar/components/FormSection';
import Input from 'aws-northstar/components/Input';
import Select from 'aws-northstar/components/Select';
import { useCallback, useEffect, useState } from 'react';
import region from "../../../../data/RegionData"

const Forms = () => {
    
    return (
        <Form
            header="Add Details"
            description="You can view source to see how components are put together"
            actions={
                <div>
                    <Button variant="link" link="/">Cancel</Button>
                    <Button variant="primary">Submit</Button>
                </div>
            }>
            <FormSection header=''>
                <FormField label="Number of Pods" hintText="Input constraint goes here. e.g. 1,000" controlId="formFieldId1">
                    <Input type="text" controlId="formFieldId1" />
                </FormField>

                <FormField label="CPU" hintText="Input constraint goes here. e.g. 1,000" controlId="formFieldId1">
                    <Input type="text" controlId="formFieldId1" />
                </FormField>

                <FormField label="Memory" hintText="Input constraint goes here. e.g. 1,000" controlId="formFieldId1">
                    <Input type="text" controlId="formFieldId1" />
                </FormField>

                <FormField label="GPU" hintText="Input constraint goes here. e.g. 1,000" controlId="formFieldId1">
                    <Input type="text" controlId="formFieldId1" />
                </FormField>
                
                
            </FormSection>
        </Form>
    )
}

export default Forms

