#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["dotnet-mvc-ui/dotnet-mvc-ui.csproj", "dotnet-mvc-ui/"]
RUN dotnet restore "dotnet-mvc-ui/dotnet-mvc-ui.csproj"
COPY . .
WORKDIR "/src/dotnet-mvc-ui"
RUN dotnet build "dotnet-mvc-ui.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "dotnet-mvc-ui.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "dotnet-mvc-ui.dll"]