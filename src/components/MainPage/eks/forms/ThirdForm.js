/** @format */

import Wizard from "aws-northstar/components/Wizard";
import { BrowserRouter } from "react-router-dom";
import FormSection from "aws-northstar/components/FormSection";
import FormField from "aws-northstar/components/FormField";
import Input from "aws-northstar/components/Input";
import Container from "aws-northstar/layouts/Container";
import React, { useState } from "react";
import Form from "aws-northstar/components/Form";
import Button from "aws-northstar/components/Button";
import RadioGroup, { RadioButton } from "aws-northstar/components/RadioGroup";

const ThirdForm = () => {
  const [Pods, setPods] = useState(0);
  const [CPU, setCPU] = useState(0);
  const [Memory, setMemory] = useState(0);
  const [GPU, setGPU] = useState(0);
  const [Instance_Type, setInstance_Type] = useState("");
  const [selectedOption, setselectedOption] = useState();

  const intance_data = async (data) => {
    const postMethod = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "https://u1lu76vc4b.execute-api.us-east-1.amazonaws.com/Dev/instance-details/instance-family",
      postMethod
    );
    const body = await response.json();
    await setInstance_Type(body);
  };

  const changeForms = (e) => {
    e.preventDefault();

    const data = {
      Pods: Pods,
      CPU: CPU,
      Memory: Memory,
      GPU: GPU,
    };
    intance_data(data);
    console.log(Instance_Type);
  };

  const onChangeRadio = (event) => {
    // console.log(event.target.value);
    setInstance_Type(event.target.value);
  };

  const OnSubmit = () => {
    // history.pushState("/ChartEKS");
  };

  const steps = [
    {
      title: "Choose instance type",
      description:
        " Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.",
      content: (
        <Form
          header="Add Details"
          description="You can view source to see how components are put together"
          onSubmit={(e) => changeForms(e)}
          actions={
            <div>
              <Button variant="link" link="/">
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          }
        >
          <FormSection header="EKS Details">
            <FormField
              label="Number of Pods"
              hintText="Input constraint goes here. e.g. 1,000"
              controlId="formFieldId1"
            >
              <Input
                type="text"
                controlId="formFieldId1"
                value={Pods}
                onChange={(e) => setPods(e)}
              />
            </FormField>

            <FormField
              label="CPU"
              hintText="Input constraint goes here. e.g. 1,000"
              controlId="formFieldId2"
            >
              <Input
                type="text"
                controlId="formFieldId2"
                value={CPU}
                onChange={(e) => setCPU(e)}
              />
            </FormField>

            <FormField
              label="Memory"
              hintText="Input constraint goes here. e.g. 1,000"
              controlId="formFieldId3"
            >
              <Input
                type="text"
                controlId="formFieldId3"
                value={Memory}
                onChange={(e) => setMemory(e)}
              />
            </FormField>

            <FormField
              label="GPU"
              hintText="Input constraint goes here. e.g. 1,000"
              controlId="formFieldId4"
            >
              <Input
                type="text"
                controlId="formFieldId4"
                value={GPU}
                onChange={(e) => setGPU(e)}
              />
            </FormField>
          </FormSection>
        </Form>
      ),
    },
    {
      title: "Add storage",
      content: (
        <FormSection header="Section header">
          <FormField
            label="Number of Pods"
            hintText="Input constraint goes here. e.g. 1,000"
            controlId="formFieldId1"
          >
            <Input
              type="text"
              value={Pods}
              readonly={true}
              controlId="formFieldId1"
            />
          </FormField>

          <FormField
            label="CPU"
            hintText="Input constraint goes here. e.g. 1,000"
            controlId="formFieldId2"
          >
            <Input
              type="text"
              value={CPU}
              readonly={true}
              controlId="formFieldId2"
            />
          </FormField>

          <FormField
            label="Memory"
            hintText="Input constraint goes here. e.g. 1,000"
            controlId="formFieldId3"
          >
            <Input
              type="text"
              value={Memory}
              readonly={true}
              controlId="formFieldId3"
            />
          </FormField>

          <FormField
            label="GPU"
            hintText="Input constraint goes here. e.g. 1,000"
            controlId="formFieldId4"
          >
            <Input
              type="text"
              value={GPU}
              readonly={true}
              controlId="formFieldId4"
            />
          </FormField>

          <Container headingVariant="h4" title="Radio group">
            <RadioGroup
              items={[
                <RadioButton
                  checked={Instance_Type === "General purpose"}
                  onChange={onChangeRadio}
                  value="General Purpose"
                >
                  General Purpose
                </RadioButton>,
                <RadioButton
                  checked={Instance_Type === "Compute optimized"}
                  onChange={onChangeRadio}
                  value="Compute optimized"
                >
                  Compute optimized
                </RadioButton>,
                <RadioButton
                  checked={Instance_Type === "Memory optimized"}
                  onChange={onChangeRadio}
                  value="Memory optimized"
                >
                  Memory optimized
                </RadioButton>,
                <RadioButton
                  checked={Instance_Type === "Storage optimized"}
                  onChange={onChangeRadio}
                  value="Storage optimized"
                >
                  Storage optimized
                </RadioButton>,
                <RadioButton
                  checked={Instance_Type === "GPU instance"}
                  onChange={onChangeRadio}
                  value="GPU instance"
                >
                  GPU instance
                </RadioButton>,
              ]}
            />
          </Container>
        </FormSection>
      ),
    },
  ];
  return (
    <BrowserRouter>
      <Container>
        <Wizard steps={steps} onSubmitButtonClick={OnSubmit} />
      </Container>
    </BrowserRouter>
  );
};

export default ThirdForm;
