export interface userDataResponse
{
    name: string,
    age: string,
    gender: string,
    country: countryDetails[],
    error?: string
}

interface countryDetails
{
    country_id: string
}