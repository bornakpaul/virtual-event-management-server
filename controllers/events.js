import EventService from "../entities/eventService.js";

const createEvent = async function(req, res, next){
     const { date, time, title, description } = req.body;
     const role = req.role;
     try{
          if(role === 'admin') {
               const event = await EventService.createEvent(date,time,title,description,[]);
               res.status(200).json({message: 'Event registered', event: event});
          }else{
               res.status(404).json({message: 'Only admins can register an event'});
          }
     }catch(err){
          console.log(err);
          res.status(500).json({message: `Error encountered : ${err}`});
     }
}

const deleteEvent = async function(req, res, next){ 
     const role = req.role;
     const {eventId} = req.body;
     try{
          if(role === 'admin') {
               await EventService.deleteEventById(eventId);
               res.status(200).json({message: 'Event removed'});
          }else{
               res.status(404).json({message: 'Only admins can remove an event'});
          }
     }catch(err){
          console.log(err);
          res.status(500).json({message: `Error encountered : ${err}`});
     }
}

const fetchAllEvents = async function(req, res, next){
     try{
          const events = await EventService.fetchAllEvents();
          res.status(200).json({message: 'Events fetched', events: events});
     }catch(err){
          console.log(err);
          res.status(500).json({message: `Error encountered : ${err}`});
     }
}

const fetchEventById = async function(req, res, next){
     const {eventId} = req.body;
     try{
          const event = await EventService.fetchEventDetailsById(eventId);
          res.status(200).json({message: 'Event fetched', event: event});
     }catch(err){
          console.log(err);
          res.status(500).json({message: `Error encountered : ${err}`});
     }
}

const addParticipant = async function(req, res, next){
     const {eventId, participantId} = req.body;
     const username = req.username;
     const role = req.role;
     try{
          if(role === 'admin'){
               const event = await EventService.addSingleParticipantToAnEvent(eventId,participantId);
               res.status(200).json({message: 'Participant added', event:event});
          } else if(username === participantId){
               const event = await EventService.addSingleParticipantToAnEvent(eventId,participantId);
               res.status(200).json({message: 'Participant added', event:event});
          }else{
             res.status(404).json({message: 'you are not authorised to perform this activity'});  
          }
     }catch(err){
          console.log(err);
          res.status(500).json({message: `Error encountered : ${err}`});
     }
}

const removeParticipant = async function(req, res, next){
     const {eventId, participantId} = req.body;
     const username = req.username;
     const role = req.role;
     try{
          if(role === 'admin'){
               const event = await EventService.removeParticipantFromAnEvent(eventId,participantId);
               res.status(200).json({message: 'Participant removed', event:event});
          } else if(username === participantId){
               const event = await EventService.removeParticipantFromAnEvent(eventId,participantId);
               res.status(200).json({message: 'Participant removed', event:event});
          }else{
             res.status(404).json({message: 'you are not authorised to perform this activity'});  
          }
     }catch(err){
          console.log(err);
          res.status(500).json({message: `Error encountered : ${err}`});
     }
}

export { createEvent, deleteEvent, addParticipant, removeParticipant,fetchEventById, fetchAllEvents }