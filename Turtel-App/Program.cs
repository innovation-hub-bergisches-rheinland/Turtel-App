using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using System.Diagnostics;

namespace Turtel_App
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            //builder.Services.AddControllersWithViews();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();
            var onAppClose = () => { };

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();

                var launchTurtel_App = Task.Factory.StartNew(() =>
                {
                    string workingDirectory = System.Environment.CurrentDirectory + @"\turtel_app\";

                    using (Process proc = new Process())
                    {
                        proc.StartInfo.FileName = "cmd.exe";
                        proc.StartInfo.UseShellExecute = false;
                        proc.StartInfo.RedirectStandardInput = true;

                        proc.StartInfo.WorkingDirectory = workingDirectory;
                        proc.Start();

                        proc.StandardInput.WriteLine("start cmd /k npm run start");
                        proc.StandardInput.Flush();
                        proc.StandardInput.Close();
                        onAppClose = () => { proc.Kill(true); };
                        proc.WaitForExit();
                    }
                });
            } else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseAuthorization();
            app.MapControllers();

            //app.MapControllerRoute(
            //    name: "default",
            //    pattern: "{controller}/{action=Index}/{id?}");

            //app.MapFallbackToFile("index.html");

            

            app.Run();
            onAppClose();

        }
    }
}