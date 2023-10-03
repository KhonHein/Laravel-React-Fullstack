import { Box } from "@mui/material";
interface PreImgType {
    e:any,
    alt?:string,
}
const PreviewImage = (preImg:PreImgType) => {
    return (
        <Box>
            <Box
                sx={{ width: '15rem', height: '15rem', borderRadius: 2, m: '.5rem auto' }}>
                <img
                    src={preImg.e.target.value}
                    alt={preImg.alt} srcSet=""
                    style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
                />
            </Box>
        </Box>
    )
}

export default PreviewImage
