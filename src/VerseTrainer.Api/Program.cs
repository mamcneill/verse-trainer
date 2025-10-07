var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// In-memory verse list
var verses = new List<Verse>
{
    new() { Id = 1, Reference = "John 3:16", Text = "For God so loved the world..." }
};

// Routes
app.MapGet("/api/my-verses", () => verses);
app.MapGet("/api/my-verses/{id:int}", (int id) =>
    verses.FirstOrDefault(v => v.Id == id) is { } verse ? Results.Ok(verse) : Results.NotFound());
app.MapPost("/api/my-verses", (Verse verse) =>
{
    verse.Id = verses.Max(v => v.Id) + 1;
    verses.Add(verse);
    return Results.Created($"/api/my-verses/{verse.Id}", verse);
});
app.MapDelete("/api/my-verses/{id:int}", (int id) =>
{
    var verse = verses.FirstOrDefault(v => v.Id == id);
    if (verse is null) return Results.NotFound();
    verses.Remove(verse);
    return Results.NoContent();
});

app.Run();

record Verse
{
    public int Id { get; set; }
    public string Reference { get; set; } = "";
    public string Text { get; set; } = "";
}
