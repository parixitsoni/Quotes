import React, { Component } from 'react';
import { Button, Card, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './quotes.css'

class RandomQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quote: '',
            author: ''
         }
    }

    componentDidMount(){
        this.getQuote()
    }

    getQuote(){
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        axios.get(url)
            .then(res =>{
                let data = res.data.quotes
                let quoteNum = Math.floor(Math.random() * data.length)
                let randomQuote = data[quoteNum]

                this.setState({
                    quote: randomQuote['quote'],
                    author:randomQuote['author']
                })
            })
    }

    getNewQuote = () => {
        this.getQuote()
    }

    render() { 
        const { quote, author } = this.state
        return ( 
            <Container>
                <Card className="shadow bg-white rounded card">
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {quote}
                            <footer className="blockquote-footer text-right">
                                <cite>{author}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>

                    <Card.Body>
                        <a href={`https://twitter.com/intent/tweet?text= "${quote}" -${author}`} data-toggle="share on twitter" rel='noopener noreferrer' target="_blank" id='tweet-quote'>
                            <i className="fa fa-twitter twitter-icon fa-2x m-2" />
                        </a>
                       <Button variant="outline-primary" className="float-right button" onClick={this.getNewQuote}>New Quote</Button>
                     </Card.Body>
                </Card>
            </Container>
         );
    }
}
 
export default RandomQuote;