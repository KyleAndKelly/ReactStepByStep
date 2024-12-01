import './App.scss'
import avatar from './images/bozai.png'
import React from 'react';
import classNames from 'classnames'

const defaultList = [
  {
    rpid: 3,
    user: {
      uid: '13258165',
      avatar: '',
      uname: 'Jack',
    },
    content: 'jjjjjjj',
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: 'Tom',
    },
    content: 'ttttttt',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: 'Kelly',
    },
    content: 'kkkkkkkkk',
    ctime: '10-19 09:00',
    like: 66,
  },
]
const user = {
  uid: '30009257',
  avatar,
  uname: 'kelly',
}

const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]



const App = () => {
  const [commentList, setCommentList] = React.useState(defaultList) 
  const [navList, setNavList] = React.useState(tabs) 
  const [currrentNavType, setType] = React.useState("hot") 

  const sortedByCtimeAsc = defaultList.slice().sort((a, b) => {
    return new Date(a.ctime) - new Date(b.ctime);
  });
  



  function onDeletClicked(userId){
    console.log(userId)
    console.log(userId)
    const  newCommentList = commentList.filter(item=>item.user.uid!==userId)
    setCommentList(newCommentList)
    
  }
  function onNavItemClick(type){
    setType(type)
    let sortedCommentList
    if(type==='hot'){
      sortedCommentList = commentList.slice().sort((a, b) => b.like - a.like)
      setCommentList()
    }else{
      sortedCommentList = commentList.slice().sort((a, b) => {
        return new Date(b.ctime) - new Date(a.ctime);
      });
    }
    setCommentList(sortedCommentList)
    
  }
  function NavListItemList() {
    return navList.map(
      item=>
      <span 
      // className={`nav-item ${currrentNavType === item.type&& 'active' }}` } 
      className={classNames('nav-item',{actice:currrentNavType === item.type})}
      onClick={()=>onNavItemClick(item.type)}  
      key={item.type}>
      {item.text}
      </span>)
  }
  function CommentItemList() {
        
    return  commentList.map(item=><div className="reply-item" key = {item.user.uid}>
    {/* 头像 */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
          className="bili-avatar-img"
          alt=""
        />
      </div>
    </div>

    <div className="content-wrap">
      {/* 用户名 */}
      <div className="user-info">
        <div className="user-name">{item.user.uname}</div>
      </div>
      {/* 评论内容 */}
      <div className="root-reply">
        <span className="reply-content">{item.content}</span>
        <div className="reply-info">
          {/* 评论时间 */}
          <span className="reply-time">{item.ctime}</span>
          {/* 评论数量 */}
          <span className="reply-time">点赞数:{item.like}</span>
          {item.user.uid !== user.uid && <span className="delete-btn" onClick={()=>onDeletClicked(item.user.uid)}>
            删除
          </span>}


        </div>
      </div>
    </div>
  </div>)
  }
  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
              <NavListItemList/>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
            <CommentItemList/>
        </div>
      </div>
    </div>
  )
}

export default App