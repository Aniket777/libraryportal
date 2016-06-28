'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Book Schema
 */
var BookSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Book name',
    trim: true
  },
  Author:{
  	type:String,
  	default:'',
  	required:'Please fill the description it is necesary',
  	trim:true 

  },
  Description:{
  	type:String,
  	default:'',
  	required:'Please fill the author it is necesary',
  	trim:true 

  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  issued:
  {
  	type:Number,
  	default:0,
  },
  issued_by:
  {
  	type:String,
  	default:''
  }
});

mongoose.model('Book', BookSchema);
