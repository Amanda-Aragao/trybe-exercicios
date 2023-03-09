import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends React.Component {
    constructor() {
        super();
        
        this.state = {
            loading: true,
            person: [],
        }
    }

    componentDidMount() {   // separado do constructor, responsavél por carregar a api e retornar com o resultado.
        const apiUrl = 'https://api.randomuser.me/';
        fetch(apiUrl).then((response) => response.json())
        .then((data) => {
            this.setState({
                person: data.results, 
                loading: false // se carregou ela retorna false.
            })
        })
    }

    shouldComponentUpdate(_nextProps, nextState){
        const maxAge = 50;
        if(nextState.person[0].dob.age < maxAge ) return true; // se for true ele não atualiza o card de pessoas, loading é true
        console.log(nextState.person[0].dob.age)
    }
    
    getUserElements(user) {
        return {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          age: user.dob.age,
          image: user.picture.thumbnail,
        };
      }


    render() {
        const { loading, person } = this.state // acessando o estado
        if(loading === true) return <Loading />;
        return (
            <div>
                <h1>
                Random Person
                </h1>
                <PersonCard 
                person={ this.getUserElements(person[0]) }
                />
            </div>
        )

    }
}

export default PersonDetails;