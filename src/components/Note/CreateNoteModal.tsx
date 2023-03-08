import { Modal, Form, Input, message } from "antd";
import { Note } from "../../interfaces/Interfaces";

const { TextArea } = Input;

interface CreateNoteProps {
  open: boolean;
  handleCancel: () => void;
  handleOk: (values: Note) => void;
}

const CreateNoteModal: React.FC<CreateNoteProps> = ({ open, handleCancel, handleOk }) => {

  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="Create a new note"
      okText="Create"
      cancelText="Cancel"
      onCancel={handleCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values: Note) => {
            form.resetFields();
            handleOk(values);
          })
          .catch((info) => {
            message.error('Validate Failed: ' + info.reason);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateNoteModal;