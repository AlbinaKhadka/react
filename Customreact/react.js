function customRender(reactElement,container){
   
   
   /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href,reactElement.props.href')
    domElement.setAttribute('target',reactElement.props.target)
container.appendChild(domElement)
*/
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
    if(prop==='children')continue;
    domElement.setAttribute(prop,reactElement.props[prop])    
    }
    container.appendChild(domElement)
}



// const ReactElement={
//     type:'a',
//     //object
//     props:{
//         href:"https://google.com",
//         target:'_blank'

//     },
//     children:'click me to visit google'
// }

const anotherElement=(
    <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElement=React.createElement(
    'a',
    {
        href:"https://google.com",target:'_blank'},
        'click me to visit google'
    

)
ReactDOM.createRoot(document.getElementsByID('root')).
render(
    reactElement
)



const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)
