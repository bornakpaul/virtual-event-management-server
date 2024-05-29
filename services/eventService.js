import Events from "../dto/event.js";

class EventService {

     async createEvent(date, time, title, description,participants){
          const event = new Events({
               date: date,
               time: time,
               title: title,
               description: description,
               participants: participants || [],
          });
          event.save();
          return event;
     }

     async fetchEventDetailsById(eventId){
          const event = await Events.findById(eventId);
          return event;
     }

     async deleteEventById(eventId){
          return await Events.findByIdAndDelete(eventId);
     }

     async fetchAllEvents(){
          const events = await Events.find();
          return events;
     }

     async addSingleParticipantToAnEvent(eventId, participantId){
          const event = await Events.findById(eventId);
          let registeredParticipants = event.participants;

          registeredParticipants.push(participantId);
          await Events.findByIdAndUpdate(eventId, {participants: registeredParticipants});

          return await Events.findById(eventId);
     }

     async removeParticipantFromAnEvent(eventId, participantId){
          const event = await Events.findById(eventId);
          let registeredParticipants = event.participants;

          registeredParticipants = registeredParticipants.filter(item => item != participantId);
          await Events.findByIdAndUpdate(eventId, {participants: registeredParticipants});

          return await Events.findById(eventId);
     }
}

export default new EventService();