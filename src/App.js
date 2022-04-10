import React from 'react';
import Badge from 'react-bootstrap/Badge';
import {marked} from 'marked';
import Footer from './Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            starterInput: `<h1>Hello World</h1>\n\n<p>Smaller Text<p> \n\n<b><em>Bold Italics</em></b>`
        };
    }

    updateMarkdown(markdown) {
        this.setState({markdown});
    }

    render(){

        return (
            <div className='App'>
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col text-center'>
                            <h1>
                                {' '}
                                <Badge className='text-align-center' variant='light'>
                                    Markdown Previewer
                                </Badge>
                            </h1>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-sm-6 my-2'>
                            {' '}
                            <div className='col text-center'>
                                <h4>
                                    <Badge className='text-align-center' variant='light'>
                                        Input
                                    </Badge>
                                </h4>
                            </div>
                            <div className='input'>
                                <textarea 
                                    className='input' 
                                    placeholder={this.state.starterInput}
                                    value={this.state.markdown} 
                                    onChange={e => {
                                        this.updateMarkdown(e.target.value);
                                    }}
                                  
                                >
                                    {' '}
                                    {console.log(this.state.markdown)}
                                </textarea>
                            </div>
                        </div>

                        <div className='col-sm-6 my-2'>
                            {' '}
                            <div className='col text-center'>
                                <h4>
                                    <Badge className='text-align-center' variant='light'>
                                        Preview
                                    </Badge>
                                </h4>
                            </div>
                            <div 
                                className='output'
                                dangerouslySetInnerHTML={
                                    this.state.markdown === ''
                                    ? {__html: this.state.starterInput}
                                    : {__html: marked(this.state.markdown)}
                                }
                            ></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

