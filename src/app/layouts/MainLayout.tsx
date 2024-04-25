import type { ProfileData } from "@/entities";
import { Header } from "@/widgets";
import { HomePage, ProfilePage } from "@/pages";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const MainLayout = () => {
  const queryClient = useQueryClient();
  const queryKey = ["myQueryKey"];

  const { data } = useQuery<ProfileData>({
    queryKey,
    queryFn: async () => {
      const result = (await queryClient.getQueryData(queryKey)) as ProfileData;
      return result;
    },
  });

  const page =
    data && Object.keys(data).length !== 0 ? (
      <ProfilePage data={data} />
    ) : (
      <HomePage data={data} />
    );
  return (
    <>
      <Header />
      {page}
    </>
  );
};
