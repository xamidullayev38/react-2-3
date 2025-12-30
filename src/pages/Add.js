import { useState } from "react";


import styled from "styled-components";

const Page = styled.div`
  padding: 24px 32px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
`;

const Subtitle = styled.p`
  margin: 4px 0 24px;
  color: #8b8b8b;
`;

const Tabs = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const TabButton = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;

  background: ${({ active }) => (active ? "#ffeb00" : "transparent")};
  box-shadow: ${({ active }) =>
    active ? "0 4px 8px rgba(0,0,0,0.1)" : "none"};
`;

const Form = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  resize: none;
  min-height: 120px;
`;

const Select = styled.select`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  width: 100%;
`;

const SubmitButton = styled.button`
  margin-top: 24px;
  align-self: center;
  padding: 12px 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #ffeb00;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;




function Add() {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <Page>
      <Title>Qo‘shish</Title>
      <Subtitle>Yangi kategoriya/taom qo‘shish</Subtitle>

      <Tabs>
        <TabButton
          active={activeTab === "category"}
          onClick={() => setActiveTab("category")}
        >
          Kategoriya
        </TabButton>

        <TabButton
          active={activeTab === "food"}
          onClick={() => setActiveTab("food")}
        >
          Taom
        </TabButton>
      </Tabs>

      {activeTab === "category" && (
        <Form>
          <Input placeholder="Kategoriya nomi" />
          <SubmitButton>Qo‘shish</SubmitButton>
        </Form>
      )}

      {activeTab === "food" && (
        <Form>
          <Row>
            <Input placeholder="Rasmga yo‘l" />
            <Input placeholder="Taom nomi" />
          </Row>

          <Textarea placeholder="Ta’rif" />

          <Row>
            <Input placeholder="Narxi" />
            <Select>
              <option>Kategoriya tanlang</option>
            </Select>
          </Row>

          <SubmitButton>Qo‘shish</SubmitButton>
        </Form>
      )}
    </Page>
  );
}

export default Add;
