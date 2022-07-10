const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions')

const boardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  icon: {
    type: String,
    default: '📃'
  },
  title: {
    type: String,
    default: 'Không có tiêu đề'
  },
  description: {
    type: String,
    default: `Thêm mô tả ở đây
    🟢 Bạn có thể thêm mô tả nhiều dòng
    🟢 Hãy bắt đầu...`
  },
  position: {
    type: Number
  },
  favourite: {
    type: Boolean,
    default: false
  },
  favouritePosition: {
    type: Number,
    default: 0
  }
}, schemaOptions)

module.exports = mongoose.model('Board', boardSchema)