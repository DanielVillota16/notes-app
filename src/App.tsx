import React, { useEffect } from 'react';
import { useState } from 'react';
import { CreateNoteModal, Note } from './components';
import { Row, Col, Button, Layout, Typography, Divider } from 'antd';
import { Note as NoteType } from './interfaces/Interfaces';
import { GetAll } from './services/Note/NoteService';

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

function App() {

  const [creatingNote, setCreatingNote] = useState<boolean>(false);
  const [notes, setNotes] = useState<Array<NoteType>>([]);

  useEffect(() => {
    GetAll().then((res) => {
      console.log('>>>', res);
    });
  }, []);

  const handleAddNote = (values: NoteType) => {
    setNotes([...notes, values])
  }

  return (
    <div className="App">
      <Layout>
        <Header style={{height: 'auto', }}>
          <Row justify="center">
            <Title style={{ color: 'white' }}>Notes 📝</Title>
          </Row>
        </Header>
        <Divider/>
        <Content>
          <CreateNoteModal
            open={creatingNote}
            handleOk={handleAddNote}
            handleCancel={() => setCreatingNote(false)}
          />
          <Row justify="center">
            <Col xs={15} sm={15} md={15} lg={15} xl={10}>
              {notes.map((note) => <Note title={note.title} description={note.description} />)}
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row justify="center">
            <Col>
              <Button
                onClick={() => setCreatingNote(true)}
                type="primary"
                size="large"
              >
                Add
              </Button>
            </Col>
          </Row>
        </Footer>
      </Layout>

    </div>
  );
}

export default App;
