using Microsoft.AspNetCore.Mvc;
using Turtel_App.ServerApp.Message.Domain;

namespace Turtel_App.ServerApp.Message.Application
{
    public class MessageController : Controller
    {
        public MessageController(){
        }

        // // GET: api/message
        // [HttpGet]
        // public async Task<IEnumerable<ChatContext.Message>> GetMessages()
        // {
        //     return await _messageRepository.GetAllAsync();
        // }

        // GET: api/message/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChatContext.Message>> GetMessage(Guid id)
        {
            using var messageRepository = new MessageRepository();

            var message = await new Task<ChatContext.Message?>( () => messageRepository.findByReceiverId(id));
            if (message == null)
            {
                return NotFound();
            }
            return message;
        }

        // POST: api/message
        [HttpPost]
        public async Task<ActionResult<ChatContext.Message>> PostMessage(ChatContext.Message message)
        {
            using var messageRepository = new MessageRepository();

            await messageRepository.AddAsync(message);
            return CreatedAtAction("GetMessage", new { id = message.Id }, message);
        }

        // PUT: api/message/5
        // [HttpPut("{id}")]
        // public async Task<IActionResult> PutMessage(string id, ChatContext.Message message)
        // {
        //     if (id != message.Receiver)
        //     {
        //         return BadRequest();
        //     }
        //     await _messageRepository.UpdateAsync(message);
        //     return NoContent();
        // }


    }
}
