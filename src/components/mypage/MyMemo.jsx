import { useState } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Mymodal from './Mymodal';


const MyMemo = () => {
  const { isLoading, error, mypagelist } = useSelector((state) => state.mypage);
  const [modalVisibleId, setModalVisibleId] = useState("")

  const showModal = (id) => {
    setModalVisibleId(id)
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
    <Div>
      {mypagelist?.memoDtoList.map((memo) => (
      <Box key={memo.roomId}  >
        <Mymodal id={memo.roomId} modalVisibleId={modalVisibleId}
        setModalVisibleId={setModalVisibleId} day={memo.createDate} content={memo.contents} name={memo.roomName}/>
        <P3 onClick={()=>showModal(memo.roomId)}>{memo.createDate}</P3>
        <Roomname onClick={()=>showModal(memo.roomId)}>{memo.roomName}</Roomname>
        <P2 onClick={()=>showModal(memo.roomId)}>{memo.contents}</P2>
      </Box>
      ))}
    </Div>  
    </>
  )
}

export default MyMemo

const Box = styled.div`
    border: none;
    width: 210px;
    /* min-width: 200px; */
    align-items: center;
    justify-content: center;
    margin: 10px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px;
    border-radius: 10px;
    border-bottom: solid 0.5px #dae6cf;
    padding: 0 3% 0 3%;
    transition: all 0.5s;
    &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(51, 51, 51) 0px 0px 0px 1.7px;
    }
    background-color: #f2f9ed;
`

const Div = styled.div`
  /* max-width: 485px; */
  /* width: 100%; */
  height: auto;
  display: grid;
  grid-template-columns: 200px 200px 500px;
  row-gap: 10px;
  column-gap: 35px;
  margin-left: 20px;
`

const Roomname = styled.h3`
  font-size: 18px;
  overflow : hidden;
  text-overflow : ellipsis;
  white-space : nowrap;
  cursor: pointer;
`

const P2 = styled.p`
  /* white-space : nowrap; */
  overflow : hidden;
  text-overflow : ellipsis;
  max-width: 200px;
  display: -webkit-box;
    -webkit-line-clamp: 2 ;
    -webkit-box-orient: vertical;
    cursor: pointer;
`
const P3 = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`