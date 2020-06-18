import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  app.get('/filteredimage/', async (req: Request, res: Response) => {
    let { image_url } = req.query;

    // Validate if image_url is present in query params.
    if (!image_url) {
      return res.status(400).send('Image url is required!');
    }

    try {
      // Filter image.
      const filteredImage = await filterImageFromURL(image_url.toString());

      // Send response with the filtered image.
      res.status(200).sendFile(filteredImage);

      // Delete image file from the server on finish of the response.
      res.on('finish', function() {
        let filesToDelete: Array<string> = [filteredImage];
        deleteLocalFiles(filesToDelete);
      });
    } catch (e) {
      res.status(422).send('Unable to process the provided image!');
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });

  // Start the Server
  app.listen( port, () => {
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
  });
})();