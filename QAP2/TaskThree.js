const httpStatusEvent = (statusCode) => {
    switch (statusCode) {
      case 200:
        return 'HTTP status 200 - OK';
      case 404:
        return 'HTTP status 404 - Not Found';
      case 500:
        return 'HTTP status 500 - Internal Server Error';
      default:
        return `HTTP status ${statusCode}`;
    }
  };
  
  const warningErrorEvent = (message) => {
    if (message.includes('error') || message.includes('warning')) {
      return message;
    }
  };
  
  const specificRouteEvent = (route) => {
    if (route === '/special') {
      return 'Special route accessed';
    }
  };
  
  const nonHomeRouteEvent = (route) => {
    if (route !== '/') {
      return `Non-home route accessed: ${route}`;
    }
  };
  
  const fileReadSuccessEvent = (fileName) => {
    return `File successfully read: ${fileName}`;
  };
  
  const fileNotAvailableEvent = (fileName) => {
    return `File not available: ${fileName}`;
  };

  //using an event emitter to capture events that could happen in a web server.
  //HTTP status codes, warnings/errors, specific route access, non-home route access, successful file reads, and unavailable files.
  
  const EventEmitter = require('events');
  
  class MyEmitter extends EventEmitter {}
  
  const myEmitter = new MyEmitter();
  
  const simulateEvents = () => {
    const statusCode = 200;
    const message = 'This is a warning message spooky';
    const route = '/special';
    const fileName = 'example.txt';
  
    myEmitter.emit('httpStatus', httpStatusEvent(statusCode));
    myEmitter.emit('warningError', warningErrorEvent(message));
    myEmitter.emit('specificRouteAccess', specificRouteEvent(route));
    myEmitter.emit('nonHomeRouteAccess', nonHomeRouteEvent(route));
    myEmitter.emit('fileReadSuccess', fileReadSuccessEvent(fileName));
    myEmitter.emit('fileNotAvailable', fileNotAvailableEvent(fileName));
  };
  
  myEmitter.on('httpStatus', (message) => {
    console.log(`HTTP Status Event: ${message}`);
  });
  
  myEmitter.on('warningError', (message) => {
    console.warn(`Warning/Error Event: ${message}`);
  });
  
  myEmitter.on('specificRouteAccess', (message) => {
    console.log(`Specific Route Access Event: ${message}`);
  });
  
  myEmitter.on('nonHomeRouteAccess', (message) => {
    console.log(`Non-Home Route Access Event: ${message}`);
  });
  
  myEmitter.on('fileReadSuccess', (message) => {
    console.log(`File Read Success Event: ${message}`);
  });
  
  myEmitter.on('fileNotAvailable', (message) => {
    console.error(`File Not Available Event: ${message}`);
  });
  
  simulateEvents();
  
