import path from 'path'
import { fileURLToPath } from 'url'

const getDirPath = (fileURL) => {
    const filename = fileURLToPath(fileURL)
    return path.dirname(filename)
}

export { getDirPath }