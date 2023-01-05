using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Turtel_App.ServerApp.Shared;

namespace Turtel_App.ServerApp.Message.Domain;

public class MessageRepository : InMemoryDbContext
{
    public MessageRepository() : base()
    {

    }

    public DbSet<ChatContext> Messages { get; set; }

    public ChatContext.Message? findByReceiverId(Guid guid) => 
    (from ChatContext.Message message in Messages
        where message.Receiver == guid
        select message).FirstOrDefault();
}
