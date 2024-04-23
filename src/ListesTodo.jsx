import React from "react"
import './ListesTodo.css'
class ListesTodo extends React.Component {

    render() {
        return <div>
            <div className="donner">
                <ul>
                    {
                        this.props.tab.map((item , index)  => {
                            return (
                                <li key={index}>
                                    <span>{item.id}</span>
                                    <span>{item.title}</span>
                                    <span>{item.body}</span>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    }
}
export default ListesTodo