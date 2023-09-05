import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Quill from 'react-quill'

import FileUploadComponent from './FileUploadComponent'

import { connect } from '../../store'
import { create } from '../../actions/post'

const PostForm = ({ create }) => {
  const [description, setBody] = useState('')
  const [bookURL, setBookURL] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    create({ description})
    setBody('')

  }

  return (
    
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={onSubmit}>
        <FileUploadComponent />
          <div className="form-group">
            <Quill
              placeholder="description"
              theme="snow"
              value={description}
              onChange={value => setBody(value)}
            />
          </div>
          <div className="btn-group float-right">
            <button type="submit" className="btn btn-dark">Share</button>
          </div>
        </form>
      </div>
    </div>
  )
}

PostForm.propTypes = {
  create: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { create })(PostForm)
