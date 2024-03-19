//creating a container for the diffrent types of pet by taking a array in the code.
//we are make a properties(props) that we can acces any were in the code by call the props every time we need it.
const pet =(props)=>{
return React.createElement("div",{},[
React.createElement("h1",{},props.name),
React.createElement("h1",{},props.animal),
React.createElement("h1",{},props.breed),
]);
};
const App = () =>{
    return React.createElement(
      "div",
      {},
      //Now we are taking array for the multiple pet in the create Element
      [
      React.createElement("h1",{},"Adopt-me"),
      //call the props for the pet details.
      React.createElement(pet,{
        animal:"Dog" ,
        name:"Luna",
        breed:"Havanese"
      }),
      React.createElement(pet,{
        animal:"Cat" ,
        name:"Tom",
        breed:"British Shorthair"
      }),
      React.createElement(pet,{
        animal:"Hamster" ,
        name:"Jack",
        breed:"Roborovski dwarf hamster"
      }),
      ]
    )
  };
  const container=document.getElementById("root");
  const root=ReactDOM.createRoot(container);
  root.render(React.createElement(App))