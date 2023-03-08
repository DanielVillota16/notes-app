import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

interface NoteProps {
  title?: string;
  description?: string; 
  handleEdit?: () => void;
  handleDelete?: () => void;
}

const Note: React.FC<NoteProps> = ( { title, description, handleEdit, handleDelete } ) => {

  return (
    <Card
      actions={[
        <EditOutlined key="edit" onClick={handleEdit}/>,
        <DeleteOutlined key="delete" onClick={handleDelete}/>,
      ]}
    >
      <Meta
        title={title}
        description={description}
      />
    </Card>
  )
}

export default Note;
