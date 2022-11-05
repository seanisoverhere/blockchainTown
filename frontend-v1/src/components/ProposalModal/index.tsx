import React, { useState } from "react";
import { Modal, DatePicker, message } from "antd";
import { useForm } from "react-hook-form";
import FormItem from "../FormItem";
import { HelperText, StyledCurrencyInput, StyledSpace } from "./styles";
import moment from "moment";

type ProposalModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  addProposal: Function;
};

const ProposalModal = ({
  isModalOpen,
  setIsModalOpen,
  addProposal,
}: ProposalModalProps) => {
  const [date, setDate] = useState<number>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = async (data: any) => {
    setIsModalOpen(false);
    const { proposalName, budget } = data;
    await addProposal(
      proposalName,
      parseFloat(budget.slice(2).replace(/,/g, "")),
      Number(date)
    );

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
              {...register("budget", { required: true })}
              name="budget"
              prefix="S$"
              decimalsLimit={2}
              allowNegativeValue={false}
            />
          </div>
          <div>
            <HelperText>Voting End Date</HelperText>
            <DatePicker onChange={(e) => setDate(moment(e).valueOf())} />
          </div>
        </StyledSpace>
      </form>
    </Modal>
  );
};

export default ProposalModal;
