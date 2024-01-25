/* カスタムクエリ */
import { generateClient } from "aws-amplify/api";

export const listAlcohlCheckDataByCorpIdAndDate = /* GraphQL */ `
  query ListAlcohlCheckDataByCorpIdAndDate(
    $corpId: Int!
    $dateRange: ModelStringInput
  ) {
    listAlcohlCheckData(
      filter: {
        corpId: { eq: $corpId }
        targetDate: $dateRange
      }
    ) {
      items {
        userId
        corpId
        categoryId
        data
        photographer
        description
        targetDate
      }
    }
  }
`;

export interface ifAlcholCheckData {
  userId: string,
  corpId: number,
  categoryId: number,
  data: string,
  photographer: string,
  description: string,
  targetDate: string,
}

export interface ifAlcholCheckDataResult {
  listAlcohlCheckData: ifAlcholCheckData[]
}

export const CustomlistAlcohlCheckDataByCorpIdAndDate = async (corpId: number, startDate: string, endDate: string) => {
  const client = generateClient();
  try {
    const response = await client.graphql({
      query: listAlcohlCheckDataByCorpIdAndDate,
      variables: { 
        corpId: corpId,
        dateRange: { between: [startDate, endDate] },
      }
    }) as { data: ifAlcholCheckDataResult };

    const data = response.data.listAlcohlCheckData
    return data;

  } catch (error) {
    console.log("fetch error", error)
    return [] as ifAlcholCheckData[];
  }
};
