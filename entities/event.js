import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
     date: {
          type: String,
          required: true,
     },
     time: {
          type: String,
          required: true,
     },
     title: {
          type: String,
          required: true,
     },
     description: {
          type: String,
          required: true,
     },
     participants: {
          type: [String],
          required: true,
     }
},{
     timestamps: true,
});

const Events = mongoose.model('Events', eventSchema);

export default Events;