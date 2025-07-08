import React from "react"
import { fetchArticlesWithQuery } from "./services"



const ArticleList = (props) => {
return(<ul>
{props.info.map(({objectID, title, url}) => {return <li key={objectID}>
<a href={url} alt={title}>{title}</a></li>})}
</ul>)

}

export class TestFetch extends React.Component{
state={info:[], error: null, isLoading:false}
async componentDidMount(){
this.setState({isLoading:true});
try{const data = await fetchArticlesWithQuery("react");
    this.setState({info:data})}
catch (error) { this.setState({ error: error });  console.log(error)}
finally{this.setState({isLoading:false})}
}

render(){
const{isLoading, error, info}=this.state;

return(<div>
{isLoading && <p>Information is loading........................</p>}
{error && <p>{error.message}</p>}
{info.length>0 && <ArticleList info={info}/>}
</div>
)}

}
