import React from "react";
import { Modal, message } from "antd";
import { useForm } from "react-hook-form";
import FormItem from "../FormItem";
import { HelperText, StyledCurrencyInput, StyledSpace } from "./styles";

type ProposalModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

const ProposalModal = ({ isModalOpen, setIsModalOpen }: ProposalModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data: any) => {
    console.log(data);
    setIsModalOpen(false);
    message.success({
      content: "Proposal submitted successfully!",
      duration: 2,
    });
    reset();
  };

  return (
    <Modal
      title="Add a Proposal"
      centered
      // width={800}
      open={isModalOpen}
      okText="Submit"
      onOk={handleSubmit(onSubmit)}
      onCancel={() => setIsModalOpen(false)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledSpace size="large" direction="vertical">
          <FormItem
            name="proposalName"
            inputText="Proposal"
            register={register}
            errors={errors}
            isRequired
          />
          <div>
            <HelperText>Budget</HelperText>
            <StyledCurrencyInput
              {...register("amount", { required: true })}
              name="amount"
              prefix="S$"
              decimalsLimit={2}
              allowNegativeValue={false}
            />
          </div>
          <FormItem
            name="duration"
            inputText="Voting End Date"
            register={register}
            errors={errors}
            isRequired
          />
        </StyledSpace>
      </form>
    </Modal>
  );
};

export default ProposalModal;
