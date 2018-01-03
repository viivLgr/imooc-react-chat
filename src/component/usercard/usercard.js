import React from 'react'
import PropTypes from 'prop-types'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

@withRouter
class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(v) {
        console.log('click',v)
        this.props.history.push(`/chat/${v.user}`)
    }
    render() {
        const Header = Card.Header
        const Body = Card.Body
        return (
            <div>
                <WingBlank size="lg">
                {this.props.userlist.map(v=>(
                    v.avatar ? (
                    <Card key={v._id} onClick={()=>this.handleClick(v)}>
                        <Header
                            title={v.user}
                            thumb={require(`../img/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        />
                        <Body>
                            {v.type==='boss'? (<div>公司:{v.company}</div>) : null}
                            {v.desc.split('\n').map(d=>(
                                <div key={d}>{d}</div>
                            ))}
                            {v.type==='boss'? (<div>薪资：{v.money}</div>) : null}
                        </Body>
                    </Card> ): null
                ))}
                </WingBlank>
            </div>
        )
    }
}

export default UserCard