import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod } from '/utils/api.util'
import { sendMail } from '/models/mail.modal'

export default async function Handle(req: ApiRequest, res: ApiResponse): Promise<void> {
    // await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['POST'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    try {
        const body = req.body

        const text = [
            '================',
            'Personal Details',
            '================',
            '',
            `Full Name: ${body.personal.name}`,
            `Email: ${body.personal.email}`,
            `University?: ${body.personal.university}`,
            `Academic Level: ${body.personal.academicLevel}`,
            '',
            '',
            '============',
            'Data Details',
            '============',
            '',
            `Name: ${body.data.name}`,
            `Type: ${body.data.type}`,
            `Latitude: ${body.data.lat}`,
            `Longitude: ${body.data.lon}`,
            `Description: ${body.data.description}`
        ].join('\n')

        const r = await sendMail(['yasa.enes@metu.edu.tr'], 'Anatolia 19: Submit Data', text)

        if (!r) {
            return res.status(HTTPStatusCode.OK).json({
                success: false,
                error: 'Mail could not be sent.'
            })
        }

        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: {}
        })
    } catch (error) {
        console.log('error', error)
        return res.status(HTTPStatusCode.InternalServerError).json({
            success: false,
            error
        })
    }
}
