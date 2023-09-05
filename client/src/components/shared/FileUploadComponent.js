import React, { Component } from 'react';
import axios from 'axios';

export default class FileUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bookURL: ''
        }
    }

    onFileChange(e) {
        this.setState({ bookURL: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('bookURL', this.state.bookURL)
        formData.append('author', "hegel")
        formData.append('title', "Science of logic")
        axios.post("http://localhost:4000/posts", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
              },
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}