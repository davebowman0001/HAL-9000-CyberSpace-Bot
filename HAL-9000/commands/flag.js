const fs = require('fs')

module.exports = {
	name: 'flag',
	description: 'List all flags.',
	execute(message) {
		for (i = 0; i < 605; i++){
			str = '';
			str += "`CSFLAG1{" + i + "}`";
			message.channel.send(str);
		}
	},
};

