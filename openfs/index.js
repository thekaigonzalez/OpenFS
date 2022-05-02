const fs = require("fs")

function ofs_wrongmode_error(msg = "") {
    return { name: 'OpenFSWrongModeError', message: msg }
}
function ofs_closedstream(msg = "") {
    return { name: 'OpenFSClosedStream', message: msg }
}


module.exports = {
    File: class {
        /**
         * The file class loads, reads, or writes files.
         * @param {string} name The name of the file.
         * @param {string} mode The mode to open the file in.
         */
        constructor(name, mode) {
            this.name = name
            this.mode = mode
            this.opened = true; /* opened */
        }

        write(text) {
            console.log(this.mode=="w")
            if (this.mode=="w") {
            if (this.opened) fs.writeFileSync(this.name, text);
            else throw ofs_closedstream("This stream is closed. (at: File.write())")
            }

        }

        read() {
            if (this.mode == "r" || this.mode == "r+") return fs.readFileSync(this.name).toString()
            else throw ofs_wrongmode_error("This function is not written for non-readable pipes.")
        }

        close() {
            this.opened = false;
        }

        delete() {
            fs.rmSync(this.name)
        }




    },

    copyFiles: function(src, dest) {
        fs.copyFileSync(src, dest)
    }
}