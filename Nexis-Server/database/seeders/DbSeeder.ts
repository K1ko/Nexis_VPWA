import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Channel from "App/Models/Channel";

export default class extends BaseSeeder {
  public async run () {
    const uniqueKey = "channel_name";

    await Channel.updateOrCreateMany(uniqueKey, [
      {
        channel_name: "general",
      },
    ]);
  }
}
