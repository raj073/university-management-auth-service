import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`Database Connected Sucessfully`)

    app.listen(config.port, () => {
      console.log(`University Management Server Listening on ${config.port}`)
    })
  } catch (error) {
    console.log(`Failed to Connect Database, ${error}`)
  }
}

main()
