module.exports ={
    execute: async(bot, message, args) => {
        const m = await message.channel.send(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣶⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿⣿⣿⡞⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡿⢃⡀⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⢿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢈⣽⣿⣿⣿⣿⣿⣿⣿⢿⣷⣦⣀⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⠄⢉⣻⣿⡇⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⡉⣀⣿⣿⣿⣿⣋⣴⣿⠟⠋⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⢀⣀⣼⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣮⡠⠄⠄⠄⠄
        ⠄⠄⠄⠄⢰⣾⣿⣿⡿⠿⠛⠛⠛⠉⠄⠄⠄⠄⠙⠻⢿⣿⣿⣿⣶⣆⡀⠄
        ⠄⠄⠄⠄⠄⠹⣿⣿⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢉⣿⣿⣿⣿⣿⠂
        ⠄⠄⠄⠄⠄⠄⠈⢿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣾⣿⡿⠟⠉⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠂⢿⣿⣥⡄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠟⠋⠁⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⣀⣤⣾⣿⣿⣷⣿⣃⡀⢴⣿⣿⡿⣿⣍⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠉⠉⠄⠄⠄⠉⠙⠛⠛⠛⠛⠂⠄⠄⠄⠄⠄`)
    m.edit(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣶⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿⣿⣿⡞⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡿⢃⡀⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⢿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢈⣽⣿⣿⣿⣿⣿⣿⣿⢿⣷⣦⣀⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⠄⢉⣻⣿⡇⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⡉⣀⣿⣿⣿⣿⣋⣴⣿⠟⠋⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⢀⣀⣼⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣮⡠⠄⠄⠄⠄
        ⠄⠄⠄⠄⢰⣾⣿⣿⡿⠿⠛⠛⠛⠉⠄⠄⠄⠄⠙⠻⢿⣿⣿⣿⣶⣆⡀⠄
        ⠄⠄⠄⠄⠄⠹⣿⣿⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢉⣿⣿⣿⣿⣿⠂
        ⠄⠄⠄⠄⠄⠄⠈⢿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣾⣿⡿⠟⠉⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠂⢿⣿⣥⡄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠟⠋⠁⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⣀⣤⣾⣿⣿⣷⣿⣃⡀⢴⣿⣿⡿⣿⣍⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠉⠉⠄⠄⠄⠉⠙⠛⠛⠛⠛⠂⠄⠄⠄⠄⠄`)
    
        m.edit(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⣠⣶⣶⣷⣿⣶⡊⠄⠄⣀⣤⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⣀⣴⣶⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⡏⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⢸⣿⡍⠁⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠁⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣡⣶⣶⣄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣴⣦⡤⣿⣿⣿⣿⡻⣿⣿⡯⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⢻⣿⣿⡏⠉⠙⠛⢛⣿⣿⣿⣿⠟⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⢿⣿⡧⠄⠄⢠⣾⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣄⣼⣿⣿⣿⠏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠸⡿⣻⣿⣿⣿⣿⣆⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣻⠟⠈⠻⢿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠿⠍⠄⠄⠄⠄⠉⠻⣿⣷⡤⣀⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⡿⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⡯⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⠃⠄⠄⠄⠄⠄⠄⠄`);
        m.edit(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⣠⣶⣶⣷⣿⣶⡊⠄⠄⣀⣤⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⣀⣴⣶⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⡏⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⢸⣿⡍⠁⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠁⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣡⣶⣶⣄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣴⣦⡤⣿⣿⣿⣿⡻⣿⣿⡯⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⢻⣿⣿⡏⠉⠙⠛⢛⣿⣿⣿⣿⠟⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⢿⣿⡧⠄⠄⢠⣾⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣄⣼⣿⣿⣿⠏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠸⡿⣻⣿⣿⣿⣿⣆⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣻⠟⠈⠻⢿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠿⠍⠄⠄⠄⠄⠉⠻⣿⣷⡤⣀⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⡿⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⡯⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⠃⠄⠄⠄⠄⠄⠄⠄`);
    
        m.edit(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣴⣧⣤⣴⡖⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣷⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠈⠘⠻⢿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⢤⣴⣦⣄⣀⣀⣴⣿⡟⢿⣿⡿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠉⠉⠙⠻⠿⣿⡿⠋⠄⠈⢀⣀⣠⣾⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⠋⠉⠉⠁⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠈⠛⠛⣿⣿⣿⣿⣿⣿⣇⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠿⢛⣿⣿⣿⣿⣷⣤⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⣶⣷⣿⣿⡉⠄⠄⠄⠄⠉⠉⠉⠉⠉⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠘⠛⠟⢿⣤⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄`)
        m.edit(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣴⣧⣤⣴⡖⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣷⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠈⠘⠻⢿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⢤⣴⣦⣄⣀⣀⣴⣿⡟⢿⣿⡿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠉⠉⠙⠻⠿⣿⡿⠋⠄⠈⢀⣀⣠⣾⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⠋⠉⠉⠁⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠈⠛⠛⣿⣿⣿⣿⣿⣿⣇⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣿⣿⠿⢛⣿⣿⣿⣿⣷⣤⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⣶⣷⣿⣿⡉⠄⠄⠄⠄⠉⠉⠉⠉⠉⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠘⠛⠟⢿⣤⣤⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄`)

        m.edit(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣤⣄⠄⡀⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⣿⣷⡒⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡀⣹⣿⣿⣿⣿⣿⣯⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣴⣿⣿⣿⣿⣿⣿⠿⠋⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⢀⣀⣤⣶⣾⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄
        ⠄⡶⣶⡿⠛⠛⠉⠉⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠘⠃⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣤⣾⣷⣿⣿⣿⣿⡏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⠂⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⢀⣤⣴⣾⣿⣿⣿⣿⡿⠛⠻⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠸⣿⣿⣿⣿⠋⠉⠄⠄⠄⠄⣼⣿⣿⡿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠈⠻⣿⣿⣆⠄⠄⠄⠄⠄⣿⣿⣿⣷⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠻⣿⣿⣆⡀⠄⠄⠈⠻⣿⣿⣿⣦⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⣀⣌⣿⣿⣿⣦⡄⠄⠄⠄⠙⠻⣿⣿⣦⣀⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠘⠻⣿⢿⢖⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠁⠄⠄⠄⠄⠄`)

        m.edit(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣤⣄⠄⡀⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⣿⣷⡒⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡀⣹⣿⣿⣿⣿⣿⣯⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣴⣿⣿⣿⣿⣿⣿⠿⠋⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⢀⣀⣤⣶⣾⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄
        ⠄⡶⣶⡿⠛⠛⠉⠉⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠘⠃⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⣤⣾⣷⣿⣿⣿⣿⡏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⠂⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⢀⣤⣴⣾⣿⣿⣿⣿⡿⠛⠻⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠸⣿⣿⣿⣿⠋⠉⠄⠄⠄⠄⣼⣿⣿⡿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠈⠻⣿⣿⣆⠄⠄⠄⠄⠄⣿⣿⣿⣷⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠻⣿⣿⣆⡀⠄⠄⠈⠻⣿⣿⣿⣦⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⣀⣌⣿⣿⣿⣦⡄⠄⠄⠄⠙⠻⣿⣿⣦⣀⠄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠈⠉⠉⠉⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠘⠻⣿⢿⢖⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠁⠄⠄⠄⠄⠄`)
            

    },
    name:"jojodance",
    description:"",
    aliases:["jojopose","JD","jd"],    
}