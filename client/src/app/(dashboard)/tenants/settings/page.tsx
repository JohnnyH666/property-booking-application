"use client"

import { useGetAuthUserQuery, useUpdateTenantSettingsMutation } from '@/app/state/api'
import SettingsForm from '@/components/SettingsForm';
import React from 'react'

const TenantSettings = () => {
  const { data: authUser, isLoading} = useGetAuthUserQuery();
  console.log("authUser" , authUser);
  const [updateTenant] = useUpdateTenantSettingsMutation();
  
  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber
  }

  const handleSubmit = async (data: typeof initialData) => {
    await updateTenant({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,

    })
  }
  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="tenant"
    >

    </SettingsForm>
  )
}

export default TenantSettings;
