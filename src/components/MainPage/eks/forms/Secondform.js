/** @format */

import Form from "aws-northstar/components/Form";
import Button from "aws-northstar/components/Button";

import FormField from "aws-northstar/components/FormField";
import FormSection from "aws-northstar/components/FormSection";
import Input from "aws-northstar/components/Input";
import Select from "aws-northstar/components/Select";
import { DataContext } from "../../../context/Provider";
import { useCallback, useContext, useEffect, useState } from "react";
import itype from "../../../../data/InstanceFamily";

const Secondform = () => {
  const { PageState, SetFormsPage, SetEksPath } = useContext(DataContext);
  const [InstanceType, SetInstanceType] = useState([]);
  const [selectedOption, setSeletedOption] = useState();

  const changeForms = (e) => {
    e.preventDefault();
    // SetEksPath({ text: "#Page3", href: "Page3" });
    SetFormsPage(2);
  };

  const instance_detail = useCallback(async () => {
    SetInstanceType(itype);
  }, []);

  useEffect(() => {
    instance_detail();
  }, [instance_detail]);

  const onChangeInstance = (event) => {
    setSeletedOption(itype.find((ins) => ins.value === event.target.value));
  };

  return (
    <Form
      header="Form with some controls"
      description="You can view source to see how components are put together"
      onSubmit={(e) => changeForms(e)}
      actions={
        <div>
          <Button variant="link">Cancel</Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      }
    >
      <FormSection header="Section header">
        <FormField
          label="Number of Pods"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            value={PageState.EksDetails.Pods}
            readonly={true}
            controlId="formFieldId1"
          />
        </FormField>

        <FormField
          label="CPU"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            value={PageState.EksDetails.CPU}
            readonly={true}
            controlId="formFieldId1"
          />
        </FormField>

        <FormField
          label="Memory"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            value={PageState.EksDetails.Memory}
            readonly={true}
            controlId="formFieldId1"
          />
        </FormField>

        <FormField
          label="GPU"
          hintText="Input constraint goes here. e.g. 1,000"
          controlId="formFieldId1"
        >
          <Input
            type="text"
            value={PageState.EksDetails.GPU}
            readonly={true}
            controlId="formFieldId1"
          />
        </FormField>

        <FormField
          label="Instance Type"
          hintText="Input constraint goes here. e.g. m4.large"
          controlId="formFieldId3"
        >
          <Select
            controlId="formFieldId3"
            selectedOption={selectedOption}
            onChange={onChangeInstance}
            options={InstanceType}
            defaultValue={InstanceType[1]}
          ></Select>
        </FormField>
      </FormSection>
    </Form>
  );
};

export default Secondform;
